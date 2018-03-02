import $ from 'jquery'
import { hello, hello_func } from './common'
import Test from './class'

$('.hello').text(hello)
$('.hello2').text(hello_func())

let chudee = new Test('chudee', 25)

$('.chudee').text(chudee.greeting())