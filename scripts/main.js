const darkAfflict = extend(PowerTurret, "dark-afflict", {
    hasHeat: true, // allows the turret to connect to heat networks
});

darkAfflict.buildType = () => extend(PowerTurret.PowerTurretBuild, darkAfflict, {
    canConsume() {
        // Require both power and at least 10 heat units
        return this.power.status > 0 && this.heat >= 10;
    },

    updateTile() {
        this.super$updateTile();

        // Optional: visually show it “cooling down” if no heat
        if (this.heat < 10) {
            this.reload = 0; // stop firing if heat is too low
        }
    }
});
