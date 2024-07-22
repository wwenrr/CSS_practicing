package back_end;

import java.util.Scanner;

public class HelloWorld {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int a;

		while (true) {
			System.out.print("Nhập điểm giải tích 2: ");
			a = scanner.nextInt();
			if (a > 5) {
				System.out.println("Đủ điểm qua môn");
			} else
				System.out.println("rớt môn");
		}
	}
}
