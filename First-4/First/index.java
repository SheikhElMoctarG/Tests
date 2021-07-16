/**
 * index
 */
public class index {

    public static void main(String[] args) {
        for (int i = 1; i <=9; i++) {
            if(i==1){
            System.out.print(" ");
            } else {
            System.out.print("*");
            }
            for (int j = 1; j <=9; j++) {
                if(j ==i && j !=1){
                System.out.print("  ");
                } else{
                if(j/2 != 0)
                System.out.print(" *");
                }
            }
            System.out.println();
        }
    }
}