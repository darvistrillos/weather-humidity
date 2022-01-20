<?php

namespace Tests\Feature;


use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Wallet;
use App\Models\Transfer;
//use Illuminate\Database\Eloquent\FactoryBuilder;


class WalletTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testGetWallet()
    {
      //  $wallet = factory(Wallet::class)->create();
      //  $transfers = factory(Transfer::class)->create();
        $response = $this->json('GET', '/api/wallet');

        $response->assertStatus(200)
            ->assertJsonStructure([
                'id', 'money', 'transfers' => [
                    '*' => [
                        'id', 'amount', 'description', 'wallet_id'
                    ]

                ]
            ]);
    }
}
