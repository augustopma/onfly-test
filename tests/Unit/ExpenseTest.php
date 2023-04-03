<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Models\Expense;

class ExpenseTest extends TestCase
{
    public function test_set_invalid_description(): void
    {
        $description = "Testando uma descrição que possui mais de 191 caracteres.
            Testando uma descrição que possui mais de 191 caracteres.
            Testando uma descrição que possui mais de 191 caracteres.
            Testando uma descrição que possui mais de 191 caracteres."
        ;

        $this->expectException(\RuntimeException::class);
        $this->expectExceptionMessage("A descrição não pode ter mais de " . Expense::MAX_DESCRIPTION_SIZE . " caracteres.");

        (new Expense())->setDescription($description);
    }

    public function test_set_invalid_amount(): void
    {
        $amount = -1;

        $this->expectException(\RuntimeException::class);
        $this->expectExceptionMessage("A quantia '$amount' não pode ser menor que " . Expense::MIN_AMOUNT_VALUE);

        (new Expense())->setAmount($amount);
    }

    public function test_set_invalid_expense_date(): void
    {
        $expenseDate = "2024-01-01";

        $this->expectException(\RuntimeException::class);
        $this->expectExceptionMessage("A data da despesa não pode ser maior que o dia de hoje.");

        (new Expense())->setExpenseDate($expenseDate);
    }
}
