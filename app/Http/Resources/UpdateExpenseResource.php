<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UpdateExpenseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $data = [
            'id' => $this->getId(),
            'description' => $this->getDescription(),
            'expense_date' => $this->getExpenseDate(),
            'user_id' => $this->getUser()->getId(),
            'amount' => $this->getAmount(),
        ];

        return [
            'success' => true,
            'message' => 'Despesa atualizada com sucesso.',
            'data' => $data,
        ];
    }
}
