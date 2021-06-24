public class index{
    public static void main(String[] args){
        for(int i=1; i<=6; i++){
            for(int j=1; j<=6-i; j++){
                System.out.print(" ");
            }
            for(int j2=1; j2<=i; j2++){
                System.out.print("*");
                if(j2 <=3){
                        for(int e1=1; e1<=j2/2; e1++){
                            System.out.print("*");
                        }
                        }else{
                        for(int e1=1; e1<=j2/4; e1++){
                            System.out.print("*");
                        }
                        }
            }
            System.out.println();
            if(i == 6){
                for(int i2=1; i2 <=i; i2++){
                    for(int j3=1; j3<=i2; j3++){
                        System.out.print(" ");
                    }
                    for(int j4=1; j4<=i-i2; j4++){
                        System.out.print("*");
                        if(j4 <=3){
                        for(int e=1; e<=j4/2; e++){
                            System.out.print("*");
                        }
                        }else{
                        for(int e=1; e<=j4/4; e++){
                            System.out.print("*");
                        }
                        }
                    }
                    System.out.println();
                }
            }
        }
    }
}