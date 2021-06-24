<?php

 for ($i=1; $i <=6; $i++) { 
     for ($j=1; $j <=6-$i; $j++) { 
         echo " ";
     }
     for ($j2=1; $j2 <=$i; $j2++) { 
         echo "*";
         if ($j2 <= 3) {
             for ($e=1; $e <=$j2/2; $e++) { 
                 echo "*";
             }
         }else{
             for ($e=1; $e <=$j2/4; $e++) { 
                 echo "*";
             }
         }
     }
     echo "\n"; 
     if ($i == 6) {
         for ($i2=1; $i2 <=$i; $i2++) { 
             for ($j3=1; $j3 <=$i2; $j3++) { 
                 echo " ";
             }
             for ($j4=1; $j4 <=$i-$i2; $j4++) { 
                 echo "*";
                  if ($j4 <= 3) {
                    for ($e=1; $e <=$j4/2; $e++) { 
                       echo "*";
                    }
                    }else{
                      for ($e=1; $e <=$j4/4; $e++) { 
                          echo "*";
                      }
                    }
             }
             echo "\n";
         }
     }

 }

?>