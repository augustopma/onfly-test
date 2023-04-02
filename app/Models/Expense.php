<?php

namespace App\Models;

use App\Interfaces\ExpenseRepositoryInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Repositories\ExpenseRepository;

class Expense extends Model
{
    use HasFactory;

    protected $fillable = [
        'description',
        'expense_date',
        'amount',
    ];

    public const MAX_DESCRIPTION_SIZE = 191;
    public const MIN_AMOUNT_VALUE = 0;
    
    private int $id;
    private ?string $description;
    private string $expenseDate;
    private float $amount;
    private User $user;
    private ?ExpenseRepository $expenseRepository;
    public $timestamps = false;

    public function __construct(ExpenseRepositoryInterface $expenseRepository = null)
    {
        $this->expenseRepository = $expenseRepository;
    }

    public function setId(int $id): Expense
    {
        $this->id = $id;

        return $this;
    }

    public function setDescription(?string $description): Expense
    {
        if (!is_null($description) && strlen($description) > self::MAX_DESCRIPTION_SIZE) {
            throw new \Exception("A descrição não pode ter mais de " . self::MAX_DESCRIPTION_SIZE . " caracteres.");
        }

        $this->description = $description;

        return $this;
    }

    public function setExpenseDate(string $expenseDate): Expense
    {
        $dateTimestamp = strtotime($expenseDate);
        $todayTimestamp = strtotime(date('Y-m-d'));

        if ($dateTimestamp > $todayTimestamp) {
            throw new \Exception("A data da despesa não pode ser maior que o dia de hoje.");
        }

        $this->expenseDate = date('Y-m-d', $dateTimestamp);

        return $this;
    }

    public function setAmount(float $amount): Expense
    {
        if ($amount < self::MIN_AMOUNT_VALUE) {
            throw new \Exception("A quantia '$amount' não pode ser menor que " . self::MIN_AMOUNT_VALUE);
        }

        $this->amount = $amount;

        return $this;
    }

    public function setUser(User $user): Expense
    {
        $this->user = $user;

        return $this;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function getExpenseDate(): string
    {
        return $this->expenseDate;
    }

    public function getAmount(): float
    {
        return $this->amount;
    }

    public function getUser(): User
    {
        return $this->user;
    }

    public function createExpense(): Expense
    {
        return $this->expenseRepository->create($this);
    }

    public function loadExpense(): Expense
    {
        return $this->expenseRepository->load($this);
    }

    public function deleteExpense(): void
    {
        if (!$this->expenseRepository->delete($this)) {
            throw new \Exception("Ocorreu um erro ao deletar a despesa, por favor contate o administrador do sistema.");
        }
    }

    public function updateExpense(): Expense
    {
        return $this->expenseRepository->update($this);
    }

    public function loadAll(): array
    {
        return $this->expenseRepository->all();
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}