<?
if(!$_GET['code']){
    exit('error code');
}
include 'config.php';

$token = json_decode(file_get_contents('https://oauth.vk.com/access_token?client_id='.ID.'&display=page&redirect_uri='.URL.'&client_secret='.SECRET.')$code='$_GET['code']'', name)

if(!$token){
    exit('error token');
}

var_dump($token);
?>