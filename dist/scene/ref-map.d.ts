export default class RefMap<KeyType, ValType> {
    private readonly map;
    private readonly count;
    add(key: KeyType, factory: () => ValType): ValType;
    addAsync(key: KeyType, factory: () => Promise<ValType>): Promise<ValType>;
    delete(key: KeyType): ValType | undefined;
}
