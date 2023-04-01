<?php

namespace App\Interfaces;

use App\Models\Expense;

interface ExpenseRepositoryInterface
{
    public function create(Expense $expense): Expense;
    public function load(Expense $expense): Expense;
}