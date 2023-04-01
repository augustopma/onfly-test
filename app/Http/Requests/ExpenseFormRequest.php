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
            'expense_date.required' => 'A data da despesa é obrigatória.',
            'amount.required' => 'A quantia da despesa é obrigatória.',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
		throw new HttpResponseException(
			response()->json([
				'success' => false,
				'errors' => $validator->errors()->all(),
				'error_code' => 402
			])
		);
	}
}
