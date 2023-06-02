<?php require './application/views/template/course-details-main-content.php'?>

<?php $stripePublicKey = 'pk_test_51N4rtfIRgykSydFWmt2QJFv0omtITN8P6AsgoicN1sqCBUdeJZ4uxe7i1VOzZGoy0B0jQloXyxFQpzpjltwmYjzN00W0VoppQm'; ?>

<script async
  src="https://js.stripe.com/v3/buy-button.js">
</script>

<stripe-buy-button
  buy-button-id="<?php echo $data['pacote']['linkPagamento']?>"
  publishable-key="<?php echo $stripePublicKey ?>"
>
</stripe-buy-button>



