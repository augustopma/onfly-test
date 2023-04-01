<?php

namespace App\Http\Controllers;

use App\Models\Expense;
use App\Http\Resources\ExpenseResource;
use Illuminate\Http\Request;
use App\Http\Requests\ExpenseFormRequest;
use App\Repositories\ExpenseRepository;

class ExpenseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
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
            return response(
                [
                    'success' => false,
                    'error' => $e->getMessage()
                ],
                400
            );
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $expense = (new Expense(new ExpenseRepository()))
                ->setId($id)
                ->loadExpense()
            ;

            return new ExpenseResource($expense);
        } catch (\Exception $e) {
            return response(
                [
                    'success' => false,
                    'error' => $e->getMessage()
                ],
                400
            );
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ExpenseFormRequest $request, Expense $expense)
    {
        $this->authenticateRequest($request, $expense, 'update');

        $expense->setDescription($request->description);
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Expense $expense)
    {
        $this->authenticateRequest($request, $expense, 'delete');

        $expense->delete();

        return $this->sendResponse([], 'Despesa deletada com sucesso.');
    }

    private function authenticateRequest(Request $request, Expense $expense, string $requestName)
    {
        if ($request->user()->cannot($requestName, $expense)) {
            return response()->json(
                [
                    'status' => 'failure',
                    'message' => 'Usuário não tem permissão para realizar essa ação.'
                ],
                403
            );
        }
    }
}