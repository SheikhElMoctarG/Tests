/**
 * index
 */
public class index {

    public static void main(String[] args) {
        for (int i = 1; i <=6; i++) {
            for (int j = 1; j <=6-i; j++) {
                System.out.print("-");
            }
            System.out.print("*");
            for (int j2 = 1; j2 <=i-2; j2++) {
                System.out.print(" ");
            }
            for (int j3 = 1; j3 <=i-1; j3++) {
                System.out.print(" ");
            }
            if (i != 1) {
                System.out.print("*");
            }
            for (int j4 = 1; j4 <=6-i; j4++) {
                System.out.print("-");
            }
            System.out.println();
            if (i == 6) {
                for (int i2 = 1; i2 <=i-1; i2++) {
                    for (int j = 1; j <=i2; j++) {
                        System.out.print("-");
                    }
                    System.out.print("*");
                    for (int j2 = 1; j2 <=5-i2; j2++) {
                        System.out.print(" ");
                    }
                    for (int j3 = 1; j3 <=5-i2-1; j3++) {
                        System.out.print(" ");
                    }
                    if(i2 !=5)
                      System.out.print("*");
                    for (int j4 = 1; j4 <=i2; j4++) {
                        System.out.print("-");
                    }
                    System.out.println();
                }
            }
        }
    }
}