<?php

for ($i=1; $i <=7; $i++) { 
    if ($i ==1 ) {
        echo "*";
        for ($j=1; $j <=14; $j++) { 
            echo " *";
        }
        echo "\n";
    } else if($i != 7){
        echo "*";
        for ($j=1; $j <=13; $j++) { 
            echo "  ";
        }
        echo " *\n";
    } else if($i == 7){
        echo "*";
        for ($j=1; $j <=14; $j++) { 
            echo " *";
        }
        echo "\n";
    }
}
?>