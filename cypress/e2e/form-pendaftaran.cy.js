describe("Test Case pendaftaran ppdb", () => {
  it("Visit PPDB Web ", () => {
    cy.visit("http://127.0.0.1:8000/");
  });

  it("Isi form pendaftaran dengan salah(menginput gmail dengan format yang salah)", () => {
    cy.clearCookies();
    cy.get(".nav-item > .nav-link").click();
    cy.get("#username").type("sabilajasmin");
    cy.get("#password").type("12345");
    cy.get("#remember").click();
    cy.get(".btn").click();
    cy.get(".btn").click();
    cy.get(".btn").click();
    cy.get("#nama").type("jasmdin jksbksb", { force: true });
    cy.get("#nisn").type("23456789", { force: true });
    cy.get("#tempat_lahir").type("malang", { force: true });
    cy.get('#tanggal_lahir').click()
    cy.get("#jenisKel").select("Laki-laki", { force: true });
    cy.get("#email").type("wakakagmail.com", { force: true });
    cy.get("#alamat").type("malanjgghb");
    cy.get("#telp").type("0876545678");
    cy.get("#agama").select("Islam");
    cy.get("#asalSekolah").type("SMAI");
    cy.get("#jurusan").select("IPA");
    cy.get("#url_foto").selectFile({
      contents: Cypress.Buffer.from("file contents"),
      fileName: "file.png",
      lastModified: Date.now(),
    });
    cy.get("#nama_ayah").type("samul sarifin");
    cy.get("#pekerjaan_ayah").type("wirausaha");
    cy.get("#pendidikan_ayah").type("S1 ekonomi");
    cy.get("#nama_ibu").type("imu kalsum");
    cy.get("#pekerjaan_ibu").type("ibu rumah tangga");
    cy.get("#pendidikan_ibu").type("smp");
    cy.get(".btn").click();
  });
  it("Isi form pendaftaran dengan salah(menginput gambar dengan format pdf)", () => {
    cy.get(".nav-item > .nav-link").click();
    cy.get("#username").type("sabilajasmin");
    cy.get("#password").type("12345");
    cy.get("#remember").click();
    cy.get(".btn").click();
    cy.get(".btn").click();
    cy.get(".btn").click();
    cy.get("#nama").type("jasmdin jksbksb", { force: true });
    cy.get("#nisn").type("23456789", { force: true });
    cy.get("#tempat_lahir").type("malang", { force: true });
    cy.get("#tanggal_lahir").contains("8").click();
    cy.get("#jenisKel").select("Laki-laki", { force: true });
    cy.get("#email").type("wakaka@gmail.com", { force: true });
    cy.get("#alamat").type("malanjgghb");
    cy.get("#telp").type("0876545678");
    cy.get("#agama").select("Islam");
    cy.get("#asalSekolah").type("SMAI");
    cy.get("#jurusan").select("IPA");
    cy.get("#url_foto").selectFile({
      contents: Cypress.Buffer.from("file contents"),
      fileName: "file.pdf",
      lastModified: Date.now(),
    });
    cy.get("#nama_ayah").type("samul sarifin");
    cy.get("#pekerjaan_ayah").type("wirausaha");
    cy.get("#pendidikan_ayah").type("S1 ekonomi");
    cy.get("#nama_ibu").type("imu kalsum");
    cy.get("#pekerjaan_ibu").type("ibu rumah tangga");
    cy.get("#pendidikan_ibu").type("smp");
    cy.get(".btn").click();
  });
  it("Isi form pendaftaran dengan salah(menginput gambar dengan format pdf)", () => {
    cy.get(".nav-item > .nav-link").click();
    cy.get("#username").type("sabilajasmin");
    cy.get("#password").type("12345");
    cy.get("#remember").click();
    cy.get(".btn").click();
    cy.get(".btn").click();
    cy.get(".btn").click();
    cy.get("#nama").type("jasmdin jksbksb", { force: true });
    cy.get("#nisn").type("23456789", { force: true });
    cy.get("#tempat_lahir").type("malang", { force: true });
    cy.get("#tanggal_lahir").contains("8").click();
    cy.get("#jenisKel").select("Laki-laki", { force: true });
    cy.get("#email").type("wakaka@gmail.com", { force: true });
    cy.get("#alamat").type("malanjgghb");
    cy.get("#telp").type("0876545678");
    cy.get("#agama").select("Islam");
    cy.get("#asalSekolah").type("SMAI");
    cy.get("#jurusan").select("IPA");
    cy.get("#url_foto").selectFile({
      contents: Cypress.Buffer.from("file contents"),
      fileName: "file.png",
      lastModified: Date.now(),
    });
    cy.get("#nama_ayah").type("samul sarifin");
    cy.get("#pekerjaan_ayah").type("wirausaha");
    cy.get("#pendidikan_ayah").type("S1 ekonomi");
    cy.get("#nama_ibu").type("imu kalsum");
    cy.get("#pekerjaan_ibu").type("ibu rumah tangga");
    cy.get("#pendidikan_ibu").type("smp");
    //cy.get(".btn").click();
  });
});

describe("Cetak Form", () => {
  it("Print formulir", () => {
    cy.visit("http://127.0.0.1:8000/login");
    cy.get("#username").type("sabilajasmin");
    cy.get("#password").type("12345");
    cy.get(".btn").click();
    cy.get(".btn").click();
    cy.get(":nth-child(1) > .btn").click();
  });
});
