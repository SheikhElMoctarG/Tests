<?php

for ($i=1; $i <=9; $i++) { 
    if ($i == 1) {
        echo " ";
    } else {
        echo "*";
    }
    for ($j=1; $j <=9; $j++) { 
        if($j == $i && $j !=1){
            echo "  ";
        } else if($j != 1){
            echo " *";
        }
    }
    echo "\n";
}

?>