sap.ui.define(["sap/ui/core/ValueState"], function (ValueState) {
  "use strict";

  return {
    getCriticalityText: function (iAmount) {
      iAmount = Number(iAmount);

      if (iAmount > 1000) {
        return "High";
      }

      if (iAmount > 500) {
        return "Medium";
      }

      return "Low";
    },

    getCriticalityState: function (iAmount) {
      iAmount = Number(iAmount);

      if (iAmount > 1000) {
        return ValueState.Error;
      }

      if (iAmount > 500) {
        return ValueState.Warning;
      }

      return ValueState.Success;
    },
  };
});
