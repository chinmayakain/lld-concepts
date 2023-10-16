/** Product interface */
interface IDocument {
    createHeader(): string;
    createContent(): string;
    createFooter(): string;
}

/** Concrete pdf document (concrete product) */
class PdfDocument implements IDocument {
    public createHeader(): string {
        return "PDF Header";
    }

    public createContent(): string {
        return "PDF Content";
    }

    public createFooter(): string {
        return "PDF Footer";
    }
}

/** Concrete word document (concrete product) */
class WordDocument implements IDocument {
    public createHeader(): string {
        return "Word Header";
    }

    public createContent(): string {
        return "Word Content";
    }

    public createFooter(): string {
        return "Word Footer";
    }
}

/** Creator Interface */
interface IDocumentFactory {
    createDocument(): IDocument;
}

/** Concrete PDF Document creator (concrete creator) */
class PdfDocumentFactory implements IDocumentFactory {
    public createDocument(): IDocument {
        return new PdfDocument();
    }
}

/** Concrete Word Document creator (concrete creator) */
class WordDocumentFactory implements IDocumentFactory {
    public createDocument(): IDocument {
        return new WordDocument();
    }
}

/** Client code */
function createDocument(factory: IDocumentFactory) {
    const document = factory.createDocument();

    console.log(document.createHeader());
    console.log(document.createContent());
    console.log(document.createFooter());
}

/** Creating PDF document */
createDocument(new PdfDocumentFactory());

/** Creating Word document */
createDocument(new WordDocumentFactory());
