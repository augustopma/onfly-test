<?php

namespace App\Repositories;

use App\Models\Expense;
use App\Models\User;
use App\Interfaces\ExpenseRepositoryInterface;
use Illuminate\Support\Facades\DB;

class ExpenseRepository implements ExpenseRepositoryInterface
{
    public function create(Expense $expense): Expense
    {
        
        $id = DB::table('expenses')->insertGetId([
            'description' => $expense->getDescription(),
            'expense_date' => $expense->getExpenseDate(),
            'amount' => $expense->getAmount(),
            'user_id' => $expense->getUser()->getId(),
        ]);

        $expense->setId($id);

        return $expense;
    }

    public function load(Expense $expense): Expense
    {
        $record = DB::table('expenses')->where('id', $expense->getId())->first();
        
        if (!$record) {
            throw new \Exception("Despesa não encontrada.");
        }

        $expense
            ->setDescription($record->description)
            ->setExpenseDate($record->expense_date)
            ->setAmount($record->amount)
            ->setUser(User::find($record->user_id))
        ;

        return $expense;
    }

    public function delete(Expense $expense): bool
    {
        return DB::table('expenses')->where('id', $expense->getId())->delete();
    }

    public function all(Expense $expense): array
    {
        return DB::table('expenses')->where('user_id', $expense->getUser()->getId())->get()->toArray();
    }

    public function update(Expense $expense): Expense
    {
        $affected = DB::table('expenses')->where('id', $expense->getId())->update([
            'description' => $expense->getDescription(),
            'expense_date' => $expense->getExpenseDate(),
            'amount' => $expense->getAmount(),
        ]);

        if (!$affected) {
            throw new \Exception("Erro ao atualizar despesa. Por favor contate o administrador do sistema.");
        }

        return $expense;
    }
}