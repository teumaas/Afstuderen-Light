//
//  ViewController.swift
//  benchmark_ios
//
//  Created by Jorrit Meeuwissen on 25-03-20.
//  Copyright © 2020 Jorrit Meeuwissen. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    private lazy var myCalc: GaussLegendre = GaussLegendre();
    private var time: String = "0.0";
    private var time2: String = "0.0";
    @IBOutlet weak var btn: UIButton!
    
    @IBOutlet weak var btn2: UIButton!
    @IBOutlet weak var txt: UILabel!
    @IBOutlet weak var txt2: UILabel!
    public override func viewDidLoad() {
        super.viewDidLoad()
        txt.text = time;
        txt2.text = time2;
        // Do any additional setup after loading the view, typically from a nib.
    }


    @IBAction func DoCalc2(_ sender: UIButton) -> Void{
        NSLog("Start");
        let startTime = myCalc.getCurrentMillis();
        var i: Int = 0;
        while((i < myCalc.numIters) == true) {
            i = i + 1;
            myCalc.getOneByPi(iterations:1000000)
            //myCalc.mathPow(iterations: 10000000)
        }
        let endTime = myCalc.getCurrentMillis();
        NSLog("End");
        let iterTime = Double(endTime-startTime)/Double(myCalc.numIters);
        NSLog("Total execution time: " + String(iterTime) + " ms");
        self.time2 = String(iterTime);
        txt2.text = self.time2;
        NSLog(self.time);
        
    }
    @IBAction func doCalc(_ sender: UIButton) -> Void
    {
        NSLog("Start");
        let startTime = myCalc.getCurrentMillis();
        var i: Int = 0;
        while((i < myCalc.numIters) == true) {
            i = i + 1;
            myCalc.gaussLegendre(iterations: 100000000)
            //myCalc.getOneByPi(iterations:1000000)
            //myCalc.mathPow(iterations: 10000000)
        }
        let endTime = myCalc.getCurrentMillis();
        NSLog("End");
        let iterTime = Double(endTime-startTime)/Double(myCalc.numIters);
        NSLog("Total execution time: " + String(iterTime) + " ms");
        self.time = String(iterTime);
        txt.text = self.time;
        NSLog(self.time);
    }
}

