import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

class DataAccess {

    async setObject(newKey: string, newVal: object) {
        await Storage.set({
            key: newKey,
            value: JSON.stringify(newVal)
        });
    }

    async getObject(objKey: string) {
        const ret = await Storage.get({ key: objKey });
        if (ret.value == null) {
            return null;
        }
        else
            return JSON.parse(ret.value);
    }

    async setItem(newKey: string, newVal: string) {
        await Storage.set({
            key: newKey,
            value: newVal
        });
    }

    async getItem(objKey: string) {
        const ret = await Storage.get({ key: objKey });
        return ret.value;
    }

    async removeItem(keyToRemove: string) {
        await Storage.remove({ key: keyToRemove });
    }

    async getKeys() {
        const keys = await Storage.keys();
        return keys.keys;
    }

    async clear() {
        await Storage.clear();
    }
}

export default DataAccess;