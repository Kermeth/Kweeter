package com.kermeth.kweeter

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class KweeterApplication

fun main(args: Array<String>) {
    runApplication<KweeterApplication>(*args)
}
