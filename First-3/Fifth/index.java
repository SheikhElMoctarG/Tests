/**
 * index
 */
public class index {

    public static void main(String[] args) {
        for (int i = 1; i <=7; i++) {
            if (i == 1) {
                System.out.print("*");
                for (int j = 1; j <=14; j++) {
                    System.out.print(" *");
                }
                System.out.println();
            } else if(i != 7){
                System.out.print("*");
                for (int j = 1; j <=13; j++) {
                    System.out.print("  ");
                }
                System.out.println(" *");
            } else if(i == 7){
                System.out.print("*");
                for (int j = 1; j <=14; j++) {
                    System.out.print(" *");
                }
                System.out.println();
            }
        }
    }
}