<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Testing\Fluent\AssertableJson;
use App\Models\User;

class ExpenseTest extends TestCase
{
    public function test_post_store_expense()
    {
        $user = User::factory()->create();
        $this->assertCount(0, $user->tokens);
        $this->actingAs($user);

        $data = [
            "description" => "Domingo teste",
            "expense_date" => "2023-04-02",
            "amount" => 10
        ];

        $response = $this->postJson('/api/expenses', $data);

        $response->assertStatus(200);
        $response->assertJson(function (AssertableJson $json) use ($data) {
            $json->hasAll([
                'success',
                'data.id',
                'data.description',
                'data.expense_date',
                'data.user_id',
                'data.amount'
            ]);

            $json->where('success', true);
            $json->where('data.description', $data['description']);
            $json->where('data.expense_date', $data['expense_date']);
            $json->where('data.amount', $data['amount']);
        });
    }

    public function test_should_return_400_if_missing_amount(): void
    {
        $user = User::factory()->create();
        $this->assertCount(0, $user->tokens);
        $this->actingAs($user);

        $data = [
            "description" => "Domingo teste",
            "expense_date" => "2023-04-02"
        ];

        $response = $this->postJson('/api/expenses', $data);

        $response->assertStatus(400);
        $response->assertJson(function (AssertableJson $json) {
            $json->hasAll(['success', 'errors']);

            $json->where('success', false);
            $json->where('errors', ["A quantia da despesa é obrigatória."]);
        });
    }

    public function test_should_return_400_if_missing_expense_date(): void
    {
        $user = User::factory()->create();
        $this->assertCount(0, $user->tokens);
        $this->actingAs($user);

        $data = [
            "description" => "Domingo teste",
            "amount" => 10,
        ];

        $response = $this->postJson('/api/expenses', $data);

        $response->assertStatus(400);
        $response->assertJson(function (AssertableJson $json) {
            $json->hasAll(['success', 'errors']);

            $json->where('success', false);
            $json->where('errors', ["A data da despesa é obrigatória."]);
        });
    }
}
