<?php 
include_once('config.php');
if(isset($_REQUEST['delId']) and $_REQUEST['delId']!=""){
	$db->delete('pupils',array('id'=>$_REQUEST['delId']));
	header('location: browse-pupils.php?msg=rds');
	exit;
}
?>