import { FormControl } from '@angular/forms';

export function restrictedWords(words: string[]) {
    return (control: FormControl): { [key: string]: any } => {
        // tslint:disable-next-line:curly
        if (!words) return null;
        const invalidWords = words.map((word: any) => control.value.includes(word) ? word : null).filter((word: any) => word != null);
        // tslint:disable-next-line:object-literal-key-quotes
        return invalidWords && invalidWords.length > 0 ? { 'restrictedWords': invalidWords.join(', ') } : null;
    };
}