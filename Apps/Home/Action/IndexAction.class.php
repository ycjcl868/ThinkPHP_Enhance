<?php
namespace Home\Action;

use Think\Action;

class IndexAction extends Action
{
    public function index()
    {
    	$this->display('/index');
    }
}