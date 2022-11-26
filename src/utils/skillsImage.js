import gcp from '../assets/images/svg/skills/gcp.svg'
import html from '../assets/images/svg/skills/html.svg'
import photoshop from '../assets/images/svg/skills/photoshop.svg'
import illustrator from '../assets/images/svg/skills/illustrator.svg'
import docker from '../assets/images/svg/skills/docker.svg'
import adobeXd from '../assets/images/svg/skills/adobe-xd.svg'
import afterEffects from '../assets/images/svg/skills/after-effects.svg'
import css from '../assets/images/svg/skills/css.svg'
import sass from '../assets/images/svg/skills/sass.svg'
import angular from '../assets/images/svg/skills/angular.svg'
import javascript from '../assets/images/svg/skills/javascript.svg'
import nextJS from '../assets/images/svg/skills/nextJS.svg'
import nuxtJS from '../assets/images/svg/skills/nuxtJS.svg'
import react from '../assets/images/svg/skills/react.svg'
import svelte from '../assets/images/svg/skills/svelte.svg'
import typescript from '../assets/images/svg/skills/typescript.svg'
import vue from '../assets/images/svg/skills/vue.svg'
import bootstrap from '../assets/images/svg/skills/bootstrap.svg'
import bulma from '../assets/images/svg/skills/bulma.svg'
import capacitorjs from '../assets/images/svg/skills/capacitorjs.svg'
import coffeescript from '../assets/images/svg/skills/coffeescript.svg'
import memsql from '../assets/images/svg/skills/memsql.svg'
import mongoDB from '../assets/images/svg/skills/mongoDB.svg'
import mysql from '../assets/images/svg/skills/mysql.svg'
import postgresql from '../assets/images/svg/skills/postgresql.svg'
import tailwind from '../assets/images/svg/skills/tailwind.svg'
import vitejs from '../assets/images/svg/skills/vitejs.svg'
import vuetifyjs from '../assets/images/svg/skills/vuetifyjs.svg'
import c from '../assets/images/svg/skills/c.svg'
import cplusplus from '../assets/images/svg/skills/cplusplus.svg'
import csharp from '../assets/images/svg/skills/csharp.svg'
import dart from '../assets/images/svg/skills/dart.svg'
import go from '../assets/images/svg/skills/go.svg'
import java from '../assets/images/svg/skills/java.svg'
import julia from '../assets/images/svg/skills/julia.svg'
import kotlin from '../assets/images/svg/skills/kotlin.svg'
import matlab from '../assets/images/svg/skills/matlab.svg'
import php from '../assets/images/svg/skills/php.svg'
import python from '../assets/images/svg/skills/python.svg'
import ruby from '../assets/images/svg/skills/ruby.svg'
import swift from '../assets/images/svg/skills/swift.svg'
import adobeaudition from '../assets/images/svg/skills/adobeaudition.svg'
import aws from '../assets/images/svg/skills/aws.svg'
import deno from '../assets/images/svg/skills/deno.svg'
import django from '../assets/images/svg/skills/django.svg'
import fastapi from '../assets/images/svg/skills/fastapi.svg'
import firebase from '../assets/images/svg/skills/firebase.svg'
import gimp from '../assets/images/svg/skills/gimp.svg'
import git from '../assets/images/svg/skills/git.svg'
import graphql from '../assets/images/svg/skills/graphql.svg'
import lightroom from '../assets/images/svg/skills/lightroom.svg'
import materialui from '../assets/images/svg/skills/materialui.svg'
import nginx from '../assets/images/svg/skills/nginx.svg'
import numpy from '../assets/images/svg/skills/numpy.svg'
import pandas from '../assets/images/svg/skills/pandas.svg'
import opencv from '../assets/images/svg/skills/opencv.svg'
import premierepro from '../assets/images/svg/skills/premierepro.svg'
import pytorch from '../assets/images/svg/skills/pytorch.svg'
import selenium from '../assets/images/svg/skills/selenium.svg'
import strapi from '../assets/images/svg/skills/strapi.svg'
// import sklearn from '../assets/images/svg/skills/sklearn.svg'
import tensorflow from '../assets/images/svg/skills/tensorflow.svg'
import webix from '../assets/images/svg/skills/webix.svg'
import wordpress from '../assets/images/svg/skills/wordpress.svg'

import azure from '../assets/images/svg/skills/azure.svg'
import blender from '../assets/images/svg/skills/blender.svg'
import fastify from '../assets/images/svg/skills/fastify.svg'
import figma from '../assets/images/svg/skills/figma.svg'
import flutter from '../assets/images/svg/skills/flutter.svg'
import haxe from '../assets/images/svg/skills/haxe.svg'
import ionic from '../assets/images/svg/skills/ionic.svg'
import markdown from '../assets/images/svg/skills/markdown.svg'
import microsoftoffice from '../assets/images/svg/skills/microsoftoffice.svg'
import picsart from '../assets/images/svg/skills/picsart.svg'
import sketch from '../assets/images/svg/skills/sketch.svg'
import unity from '../assets/images/svg/skills/unity.svg'
import wolframalpha from '../assets/images/svg/skills/wolframalpha.svg'
import canva from '../assets/images/svg/skills/canva.svg'
import adobe from '../assets/images/svg/skills/adobe.svg'
import powerbi from '../assets/images/svg/skills/powerbi.svg'
import rabbitmq from '../assets/images/svg/skills/rabbitmq.svg'
import keras from '../assets/images/svg/skills/keras.svg'
import flask from '../assets/images/svg/skills/flask.svg'
import r from '../assets/images/svg/skills/r.svg'
import oracle from '../assets/images/svg/skills/oracle.svg'

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'gcp':
            return gcp;
        case 'html':
            return html;
        case 'adobe':
            return adobe;
        case 'photoshop':
            return photoshop;
        case 'docker':
            return docker;
        case 'illustrator':
            return illustrator;
        case 'adobe xd':
            return adobeXd;
        case 'after effects':
            return afterEffects;
        case 'css':
            return css;
        case 'sass':
            return sass;
        case 'angular':
            return angular;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'nuxt js':
            return nuxtJS;
        case 'react':
            return react;
        case 'reactjs':
            return react;
        case 'svelte':
            return svelte;
        case 'typescript':
            return typescript;
        case 'vue':
            return vue;
        case 'bootstrap':
            return bootstrap;
        case 'bulma':
            return bulma;
        case 'capacitorjs':
            return capacitorjs;
        case 'coffeescript':
            return coffeescript;
        case 'memsql':
            return memsql;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'tailwind':
            return tailwind;
        case 'vitejs':
            return vitejs;
        case 'vuetifyjs':
            return vuetifyjs;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'c#':
            return csharp;
        case 'dart':
            return dart;
        case 'go':
            return go;
        case 'java':
            return java;
        case 'kotlin':
            return kotlin;
        case 'julia':
            return julia;
        case 'matlab':
            return matlab;
        case 'php':
            return php;
        case 'python':
            return python;
        case 'ruby':
            return ruby;
        case 'swift':
            return swift;
        case 'adobe audition':
            return adobeaudition;
        case 'aws':
            return aws;
        case 'deno':
            return deno;
        case 'django':
            return django;
        case 'fastapi':
            return fastapi;
        case 'firebase':
            return firebase;
        case 'gimp':
            return gimp;
        case 'git':
            return git;
        case 'graphql':
            return graphql;
        case 'lightroom':
            return lightroom;
        case 'materialui':
            return materialui;
        case 'nginx':
            return nginx;
        case 'numpy':
            return numpy;
        case 'pandas':
            return pandas;
        case 'opencv':
            return opencv;
        case 'premiere pro':
            return premierepro;
        case 'pytorch':
            return pytorch;
        case 'selenium':
            return selenium;
        case 'strapi':
            return strapi;
        // case 'sklearn':
        //     return sklearn;
        case 'tensorflow':
            return tensorflow;
        case 'webix':
            return webix;
        case 'wordpress':
            return wordpress;
        case 'azure':
            return azure;
        case 'blender':
            return blender;
        case 'fastify':
            return fastify;
        case 'figma':
            return figma;
        case 'flutter':
            return flutter;
        case 'haxe':
            return haxe;
        case 'ionic':
            return ionic;
        case 'markdown':
            return markdown;
        case 'microsoft office':
            return microsoftoffice;
        case 'picsart':
            return picsart;
        case 'sketch':
            return sketch;
        case 'unity':
            return unity;
        case 'wolframalpha':
            return wolframalpha;
        case 'canva':
            return canva;
        case 'powerbi':
            return powerbi;
        case 'rabbitmq':
            return rabbitmq;
        case 'keras':
            return keras;
        case 'flask':
            return flask;
        case 'r':
            return r;
        case 'oracle':
            return oracle;
        default:
            break;
    }
}
