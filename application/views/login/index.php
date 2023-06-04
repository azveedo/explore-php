<?php if(!empty($_SESSION["loginError"])): ?>
<div style="color: red"><?php echo $_SESSION["loginError"]; ?></div>
<?php endif; ?>
<?php require './application/views/template/login.php';?>