<?php $stripePublicKey = 'pk_test_51N4rtfIRgykSydFWmt2QJFv0omtITN8P6AsgoicN1sqCBUdeJZ4uxe7i1VOzZGoy0B0jQloXyxFQpzpjltwmYjzN00W0VoppQm'; ?>

<h1>PÁGINA DE DETALHES</h1>

<?= print_r($data['linkPagamento'])?>

<stripe-buy-button
    buy-button-id="<?= $data['pacotes']['linkPagamento'] ?>" 
    publishable-key="<?= $stripePublicKey ?>"> 
</stripe-buy-button>

<stripe-buy-button
  buy-button-id="buy_btn_1NDwoBIRgykSydFWeIRFERHs"
  publishable-key="pk_test_51N4rtfIRgykSydFWmt2QJFv0omtITN8P6AsgoicN1sqCBUdeJZ4uxe7i1VOzZGoy0B0jQloXyxFQpzpjltwmYjzN00W0VoppQm"
>
</stripe-buy-button>