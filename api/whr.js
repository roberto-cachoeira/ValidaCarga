module.exports = {
    getWhrItemCount : async (whrNumber, dbx, algorithm) => {
        const list = dbx.Warehousing.WarehouseReceipt.ListByGuid;
        return list.Count;
        // find the desired item asynchronously
        const found = await algorithm.find(dbx.using(list))
            .where(function (whr) {
                return whr.Number == whrNumber;
            });

        // once the search is complete, return the proper result
        if (!found)
            return 0;

        return found.Items.Count;
    }
};