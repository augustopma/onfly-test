<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class ExpenseFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'description' => 'string',
            'expense_date' => 'required|date',
            'amount' => 'required|numeric',
        ];
    }

    public function messages(): array
    {
        return [
            'description.string' => 'A descrição da despesa deve ser uma string.',
            'expense_date.required' => 'A data da despesa é obrigatória.',
            'expense_date.date' => 'O campo \'expense_date\' deve ser uma data.',
            'amount.required' => 'A quantia da despesa é obrigatória.',
            'amount.numeric' => 'A quantia deve ser um valor numérico.',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
		throw new HttpResponseException(
			response()->json([
				'success' => false,
				'errors' => $validator->errors()->all()
            ], 400)
		);
	}
}
