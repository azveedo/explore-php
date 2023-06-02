<?php 
function get_domain()
{
	//the variable $domain can be set to the domain your application is running from. 
	$domain = "https://www.my-site-domain.com/";
   	return $domain;
}

$isLocalhost = isLocalhost();
$baseUrl = $isLocalhost ? 'http://localhost:8888/explore-php' : 'http://explore-php.com.br';