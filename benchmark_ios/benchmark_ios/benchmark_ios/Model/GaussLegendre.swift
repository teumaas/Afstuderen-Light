//
//  gaussLegendre.swift
//  benchmark_ios
//
//  Created by Jorrit Meeuwissen on 25-03-20.
//  Copyright © 2020 Jorrit Meeuwissen. All rights reserved.
//

import Foundation

public class GaussLegendre {
    
    func getCurrentMillis()->Int64{
        return  Int64(NSDate().timeIntervalSince1970 * 1000)
    }
    
    let numIters = 100;
    public func gaussLegendre(iterations:Int) -> Double {
        var a:Double = 1.0;
        var b:Double = 1.0 / sqrt(2);
        var t:Double = 1.0 / 4.0;
        var p:Double = 1.0;
        
        var i: Int = 0;
        while((i < iterations) == true) {
            i = i + 1
            let aNext:Double = (a + b) / 2;
            let bNext:Double = sqrt(a * b);
            let tNext:Double = t - p * pow(a - aNext, 2);
            let pNext:Double = 2 * p;
            a = aNext;
            b = bNext;
            t = tNext;
            p = pNext;
        }
        return pow(a + b, 2)/(4 * t);
    }
    
    public func getOneByPi(iterations:Int) -> Float80 {
        var ak:Float80 = 6.0 - 4 * sqrt(2);
        var yk:Float80 = sqrt(2) - 1.0;
        var ak1:Float80 ;
        var yk1:Float80;
        var temp2 :Float80;
        var temp1 :Float80;
        var i: Float80 = 0;
        let iter = Float80(iterations)
        while((i < iter) == true) {
            i = i + 1
            yk1 = (1 - pow((1 - yk * yk * yk * yk),(0.25)))/(1 + pow((1 - yk * yk * yk * yk),(0.25)));
            temp2 = powl(2.0, 2.0 * i + 3.0)
            temp1 = (1 + yk1 + yk1 * yk1) * temp2 * yk1
            ak1 = ak * pow((1 + yk1), 4) - temp1;
            yk = yk1;
            ak = ak1;
        }
        return ak;
    }
    
    public func mathPow(iterations:Int){
        var i: Double = 0;
        let iter = Double(iterations)
        while((i < iter) == true) {
            i = i + 1
            pow(i, 2.0)
        }
    }
    
}
