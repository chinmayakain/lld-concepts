/** Prototype: UserAccount */
class UserAccount {
    constructor(public userName: string, public email: string, public avatar: string) {}

    clone(): UserAccount {
        return new UserAccount(this.userName, this.email, this.userName);
    }

    show(): void {
        console.log(`Username: ${this.userName}`);
        console.log(`Email: ${this.email}`);
        console.log(`Avatar: ${this.avatar}`);
    }
}

/** Concrete Prototype: Default User */
class DefaultUser extends UserAccount {
    constructor(userName: string, email: string) {
        super(userName, email, "default-avatar.png");
    }
}

/** Client */
const defaultUser = new DefaultUser("jonDoe", "jon@gmail.com");
const customUser = defaultUser.clone();

customUser.userName = "lisaMurphy";
customUser.email = "lisa@gmail.com";
customUser.avatar = "custom-avatar.png";

defaultUser.show();
customUser.show();

/** Prototype: Document Template */
class DocumentTemplate {
    constructor(private title: string, private content: string) {}

    clone(): DocumentTemplate {
        return new DocumentTemplate(this.title, this.content);
    }

    generate(data: any) {
        return this.content.replace("[PLACEHOLDER]", data);
    }
}

/** Concrete Prototype: Sales Report */
class MonthlySalesReport extends DocumentTemplate {
    constructor() {
        super("Monthly Sales Report", "Sales report for the month of [PLACEHOLDER]");
    }
}

/** Concrete Prototype: Invoice */
class Invoice extends DocumentTemplate {
    constructor() {
        super("Invoice", "Invoice for order #[PLACEHOLDER]");
    }
}

/** Client */
const generateDocument = (template: DocumentTemplate, content: any): string => {
    return template.generate(content);
};

const monthlySalesReportTemplate = new MonthlySalesReport();
const invoiceTemplate = new Invoice();

const monthlySalesReport = generateDocument(monthlySalesReportTemplate, "OCT 2023");
const invoice = generateDocument(invoiceTemplate, "INV-12345");

console.log(monthlySalesReport);
console.log(invoice);
