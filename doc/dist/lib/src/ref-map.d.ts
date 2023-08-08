export default class RefMap<KeyType, ValType> {
    private readonly map;
    private readonly count;
    add(key: KeyType, factory: () => ValType): ValType;
    delete(key: KeyType): ValType | undefined;
}
//# sourceMappingURL=ref-map.d.ts.map