/**
 * index
 */
public class index {

    public static void main(String[] args) {
        for (int i = 1; i <=10; i++) {
            if (i == 1) {
                System.out.print("*");
                for (int j = 1; j <=9; j++) {
                    System.out.print(" *");
                }
                System.out.println();
            } else if(i != 10){
              System.out.print("*");
              for (int j = 1; j <=8; j++) {
                  System.out.print("  ");
              }
              System.out.println(" *");
            } else if (i==10) {
                System.out.print("*");
                for (int j = 1; j <=9; j++) {
                    System.out.print(" *");
                }
                System.out.println();
            }
        }
    }
}