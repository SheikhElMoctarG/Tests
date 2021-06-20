<?php

for ($i=1; $i <=7; $i++) { 
    for ($j=1; $j <=7-$i; $j++) { 
        echo " ";
    }
    for ($k=1; $k <=$i; $k++) { 
        echo "*";
        if ($k >= 4) {
            for ($e=1; $e <=$k/4; $e++) { 
                echo "*";
            }
        }else{
            for ($e=1; $e <=$k/2; $e++) { 
                echo "*";
            }
        }
    }
    echo "\n";
}

?>