package com.example.benchmark_android

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.TextView

class MainActivity : AppCompatActivity() {

    val numIters = 1000

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        findViewById<View>(R.id.btn_borwein).setOnClickListener {
            val startTime = System.currentTimeMillis()
            val calc = PiCalculator()
            var i = 0
            while (i < numIters) {
                //calc.getOneByPi(1000000)
                calc.mathPow(10000000)
                i += 1
            }
            val endTime = System.currentTimeMillis()
            val iterTime = (endTime - startTime) / numIters
            (findViewById<View>(R.id.text_view_borwein) as TextView).text = iterTime.toString() + " µs per iteration"


            println("Total execution time: " + (endTime - startTime) / numIters + " ms")
        }

        findViewById<View>(R.id.btn_gauss_legendre).setOnClickListener {
            val startTime = System.currentTimeMillis()
            val calc = PiCalculator()
            var i = 0
            while (i < numIters) {
                calc.getOneByPi(1000000)
                i += 1
            }
            val endTime = System.currentTimeMillis()
            val iterTime = (endTime - startTime) / numIters
            (findViewById<View>(R.id.text_view_gauss) as TextView).text = iterTime.toString() + " µs per iteration"


            println("Total execution time: " + (endTime - startTime) / numIters + " ms")
        }
    }
}
