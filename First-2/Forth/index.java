/**
 * index
 */
public class index {

    public static void main(String[] args) {
        for (int i = 1; i <=6; i++) {
            for (int j = 1; j <=i; j++) {
                System.out.print("*");                
            }
            System.out.println();
            if(i == 6){
            for (int k = 1; k <=i; k++) {
                 for (int a = 1; a <=i-k; a++) {
                   System.out.print("*");
                 }   
                 System.out.println();
            }
            }
        }
    }
}