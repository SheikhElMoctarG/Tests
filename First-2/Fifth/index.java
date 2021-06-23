/**
 * index
 */
public class index {

    public static void main(String[] args) {
        for (int i = 1; i <=6; i++) {
            for (int j = 1; j <=6-i; j++) {
                System.out.print(" ");
            }
            for (int j2 = 1; j2 <=i; j2++) {
                System.out.print("*");
            }
            System.out.println();
            if (i == 6) {
                for (int i2 = 1; i2 <=i; i2++) {
                    for (int a = 1; a <=i2; a++) {
                        System.out.print(" ");
                    }
                    for (int a2 = 1; a2 <=i-i2; a2++) {
                        System.out.print("*");
                    }
                    System.out.println();
                }
            }
        }
    }
}