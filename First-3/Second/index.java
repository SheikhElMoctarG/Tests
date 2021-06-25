/**
 * index
 */
public class index {

    public static void main(String[] args) {
        for (int i = 1; i <=6; i++) {
            for (int j = 1; j <=6-i; j++) {
                System.out.print(" ");
            }
            System.out.print("*");
            for (int j2 = 0; j2 <=i-2; j2++) {
                System.out.print(" ");
            }
            for (int j5 = 2; j5 <=i/1-1; j5++) {
                System.out.print(" ");
            }
            for (int j6 = 1; j6 <=1; j6++) {
                if (i != 1) {
                   System.out.print("*");
                }
            }
            System.out.println();
            if (i == 6) {
                for (int i2 = 1; i2 <=i-1; i2++) {
                    for (int j3 = 1; j3 <=i2; j3++) {
                        System.out.print(" ");
                    }
                    System.out.print("*");
                    for (int j4 = 1; j4 <=i-i2-1; j4++) {
                        System.out.print(" ");
                    }
                    for (int j5 = 2; j5 <=i-i2-1; j5++) {
                        System.out.print(" ");
                    }
                    if (i2 != 5) {
                       System.out.print("*");
                    }
                    System.out.println();
                }
            }
        }
    }
}