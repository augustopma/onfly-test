<?php

namespace App\Http\Controllers;

use App\Models\Expense;
use App\Http\Resources\ExpenseResource;
use App\Http\Resources\DeleteExpenseResource;
use App\Http\Resources\UpdateExpenseResource;
use App\Http\Resources\ListExpenseResource;
use App\Http\Requests\ExpenseFormRequest;
use App\Repositories\ExpenseRepository;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class ExpenseController extends Controller
{
    public function index(Request $request)
    {
        try {
            $expenses = (new Expense(new ExpenseRepository()))
                ->setUser($request->user())
                ->loadAll()
            ;

            return new ListExpenseResource($expenses);
        } catch (\Exception $e) {
            return $this->showError($e);
        }
    }

    public function store(ExpenseFormRequest $request)
    {
        try {
            $expense = (new Expense(new ExpenseRepository()))
                ->setDescription($request->description)
                ->setExpenseDate($request->expense_date)
                ->setAmount($request->amount)
                ->setUser($request->user())
                ->createExpense()
            ;

            return new ExpenseResource($expense);
        } catch (\Exception $e) {
            return $this->showError($e);
        }
    }

    public function show(string $id)
    {
        try {
            $expense = (new Expense(new ExpenseRepository()))
                ->setId($id)
                ->loadExpense()
            ;

            $this->authorize('canInteract', $expense);

            return new ExpenseResource($expense);
        } catch (\Exception $e) {
            return $this->showError($e);
        }
    }

    public function update($id, ExpenseFormRequest $request)
    {
        try {
            $expense = (new Expense(new ExpenseRepository()))
                ->setId($id)
                ->loadExpense()
            ;

            $this->authorize('canInteract', $expense);

            $expense
                ->setDescription($request->description)
                ->setExpenseDate($request->expense_date)
                ->setAmount($request->amount)
                ->updateExpense()
            ;

            return new UpdateExpenseResource($expense);
        } catch (\Exception $e) {
            return $this->showError($e);
        }
    }

    public function destroy(string $id)
    {
        try {
            $expense = (new Expense(new ExpenseRepository()))
                ->setId($id)
                ->loadExpense()
            ;

            $this->authorize('canInteract', $expense);

            $expense->deleteExpense();

            return new DeleteExpenseResource($expense);
        } catch (\Exception $e) {
            return $this->showError($e);
        }
    }

    private function showError(\Exception $e): Response
    {
        return response(
            [
                'success' => false,
                'error' => $e->getMessage()
            ],
            400
        );
    }
}