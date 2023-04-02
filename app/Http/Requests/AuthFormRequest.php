<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class AuthFormRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8'
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'O nome do usuário é obrigatório.',
            'name.string' => 'O nome deve ser uma string.',
            'email.required' => 'O email é obrigatória.',
            'email.unique' => 'O email fornecido já foi cadastrado no sistema.',
            'password.required' => 'A senha é obrigatória.',
            'password.string' => 'A senha deve ser uma string.',
            'password.min' => 'A senha deve ter no mínimo 8 caracteres.',
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
