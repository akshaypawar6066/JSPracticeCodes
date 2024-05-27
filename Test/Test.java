import java.util.Scanner;

public class Test {
    public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter ANy NO:");
		int num = sc.nextInt();
		
	int revNo=0;
	
	int rem;
	while(num>0)
	{
		rem=num%10;
		revNo= revNo*10+rem;
		num=num/10;
	}
	
	System.out.println("Reverse No is:"+revNo);
	}
}