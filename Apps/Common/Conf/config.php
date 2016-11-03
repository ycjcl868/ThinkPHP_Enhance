<?php
return array(
	//'配置项'=>'配置值'
    'VAR_PAGE'=>'p',
    'PAGE_SIZE'=>15,
    // 防止从数据库取出的字段都变成小写
    'DB_PARAMS'=>array(\PDO::ATTR_CASE => \PDO::CASE_NATURAL),
	// 'DB_TYPE'=>'数据库类型',
    // 'DB_HOST'=>'数据库地址',
    // 'DB_NAME'=>'数据库名',
    // 'DB_USER'=>'数据库用户名',
    // 'DB_PWD'=>'数据库密码',
    // 'DB_PREFIX'=>'数据库前缀',
    'DEFAULT_C_LAYER' =>  'Action',
);