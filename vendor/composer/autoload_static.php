<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit6cd3a9b54242e4108a2f46d810a23d80
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Stripe\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Stripe\\' => 
        array (
            0 => __DIR__ . '/..' . '/stripe/stripe-php/lib',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit6cd3a9b54242e4108a2f46d810a23d80::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit6cd3a9b54242e4108a2f46d810a23d80::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit6cd3a9b54242e4108a2f46d810a23d80::$classMap;

        }, null, ClassLoader::class);
    }
}