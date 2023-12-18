// lib.rs
declare_id!("ZbYdaBBWSn2d5xwDCWBLoMHfcD9a2aMUvbeciibzQgb");


use solana_program::{
    account_info::AccountInfo, entrypoint, entrypoint::ProgramResult, pubkey::Pubkey,
};

entrypoint!(process_instruction);

fn process_instruction(_program_id: &Pubkey, accounts: &[AccountInfo], _instruction_data: &[u8]) -> ProgramResult {
    // Access account data using accounts array
    let account_data = &accounts[0].try_borrow_data()?;
    // Process data as needed

    Ok(())
}
