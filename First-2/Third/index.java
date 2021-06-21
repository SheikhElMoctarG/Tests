/**
 * index
 */
public class index {

    public static void main(String[] args) {
        for (int i = 1; i <7; i++) {
            for (int j = 1; j <=i; j++) {
                System.out.print(" ");
            }
            for (int k = 1; k <=7-i; k++) {
                System.out.print("*");
                if (k >= 4) {
                    for (int a = 1; a <=k/4; a++) {
                        System.out.print("*");
                    }
                } else {
                    for (int a = 1; a <=k/2; a++) {
                         System.out.print("*");
                    }
                }
                
            }
            System.out.println();
        }
    }
}