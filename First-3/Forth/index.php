<?php

 for ($i=1; $i <=6; $i++) { 
     for ($j=1; $j <=6-$i; $j++) { 
         echo "-";
     }
     echo "*";
     for ($j2=1; $j2 <=$i-2; $j2++) { 
         echo " ";
     }
     for ($j3=1; $j3 <=$i-1; $j3++) { 
         echo " ";
     }
     if($i != 1)
       echo "*";
     for ($j4=1; $j4 <=6-$i; $j4++) { 
         echo "-";
     }
     echo "\n";
     if ($i == 6) {
         for ($i2=1; $i2 <=$i-1; $i2++) { 
             for ($j=1; $j <=$i2; $j++) { 
                 echo "-";
             }
             echo "*";
             for ($j2=1; $j2 <=5-$i2; $j2++) { 
                 echo " ";
             }
             for ($j3=1; $j3 <=5-$i2-1 ; $j3++) { 
                 echo " ";
             }
             if ($i2 != 5) {
                 echo "*";
             }
             for ($j4=1; $j4 <=$i2 ; $j4++) { 
                 echo "-";
             }
            echo "\n";
         }
     }
 }

?>